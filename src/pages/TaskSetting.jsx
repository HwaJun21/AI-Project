import { useMemo, useState } from "react";
import { tasks as initialTasks } from "../data/mockTasks";
import StatusBadge from "../components/StatusBadge";

const emptyForm = {
  id: "",
  phase: "",
  system: "",
  work: "",
  item: "",
  task: "",
  critical: false,
  predecessor: "",
  deliverable: "",
  owner: "",
  subOwner: "",
  ownerEmail: "",
  plannedStart: "",
  plannedEnd: "",
};

export default function TaskSetting() {
  const [tasks, setTasks] = useState(initialTasks);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  // 후행 Task ID는 선행 관계로부터 자동 계산 (수동 입력 금지)
  const successorMap = useMemo(() => {
    const map = {};
    tasks.forEach((t) => {
      (t.predecessor || []).forEach((p) => {
        map[p] = [...(map[p] || []), t.id];
      });
    });
    return map;
  }, [tasks]);

  const handleChange = (field, value) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.task) return;
    const newTask = {
      ...form,
      predecessor: form.predecessor ? [form.predecessor] : null,
      successor: [], // 저장 시 successorMap에서 자동 파생되므로 별도 저장 불필요
      actualStart: null,
      actualEnd: null,
      status: "예정",
    };
    setTasks((prev) => {
      if (editingId) {
        return prev.map((t) => (t.id === editingId ? { ...t, ...newTask } : t));
      }
      return [...prev, newTask];
    });
    setForm(emptyForm);
    setEditingId(null);
  };

  const startEdit = (t) => {
    setForm({
      ...t,
      predecessor: t.predecessor?.[0] || "",
    });
    setEditingId(t.id);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal-600">
        Task Setting
      </p>
      <h1 className="font-display text-3xl font-bold text-navy-950">
        작업 마스터 데이터 관리
      </h1>

      {/* 등록/수정 폼 */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-navy-950/10 bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4"
      >
        <Input label="Task ID" value={form.id} onChange={(v) => handleChange("id", v)} required disabled={!!editingId} />
        <Input label="단계" value={form.phase} onChange={(v) => handleChange("phase", v)} />
        <Input label="시스템" value={form.system} onChange={(v) => handleChange("system", v)} />
        <Input label="업무" value={form.work} onChange={(v) => handleChange("work", v)} />
        <Input label="항목" value={form.item} onChange={(v) => handleChange("item", v)} />
        <Input label="작업" value={form.task} onChange={(v) => handleChange("task", v)} required />
        <Input label="산출물" value={form.deliverable} onChange={(v) => handleChange("deliverable", v)} />

        <div>
          <label className="text-xs text-navy-950/40">선행 Task ID</label>
          <select
            value={form.predecessor}
            onChange={(e) => handleChange("predecessor", e.target.value)}
            className="mt-1 w-full rounded-lg border border-navy-950/15 px-2 py-1.5 font-mono text-xs"
          >
            <option value="">없음</option>
            {tasks.map((t) => (
              <option key={t.id} value={t.id}>
                {t.id}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs text-navy-950/40">후행 Task ID (자동계산)</label>
          <p className="mt-1 rounded-lg border border-dashed border-navy-950/15 bg-navy-950/[0.03] px-2 py-1.5 font-mono text-xs text-navy-950/40">
            {editingId ? (successorMap[editingId]?.join(", ") || "-") : "저장 후 자동 계산"}
          </p>
        </div>

        <Input label="담당자" value={form.owner} onChange={(v) => handleChange("owner", v)} />
        <Input label="서브 담당자" value={form.subOwner} onChange={(v) => handleChange("subOwner", v)} />
        <Input label="담당자 이메일" value={form.ownerEmail} onChange={(v) => handleChange("ownerEmail", v)} type="email" />

        <div>
          <label className="text-xs text-navy-950/40">계획 시작</label>
          <input
            type="datetime-local"
            value={form.plannedStart}
            onChange={(e) => handleChange("plannedStart", e.target.value)}
            className="mt-1 w-full rounded-lg border border-navy-950/15 px-2 py-1.5 font-mono text-xs"
          />
        </div>
        <div>
          <label className="text-xs text-navy-950/40">계획 종료</label>
          <input
            type="datetime-local"
            value={form.plannedEnd}
            onChange={(e) => handleChange("plannedEnd", e.target.value)}
            className="mt-1 w-full rounded-lg border border-navy-950/15 px-2 py-1.5 font-mono text-xs"
          />
        </div>

        <label className="flex items-center gap-2 self-end pb-2">
          <input
            type="checkbox"
            checked={form.critical}
            onChange={(e) => handleChange("critical", e.target.checked)}
            className="h-4 w-4 accent-rose-600"
          />
          <span className="text-sm text-navy-950/70">Critical Path</span>
        </label>

        <div className="flex items-end gap-2">
          <button
            type="submit"
            className="rounded-lg bg-navy-950 px-4 py-2 font-mono text-xs font-medium text-white hover:bg-navy-800"
          >
            {editingId ? "수정 저장" : "작업 등록"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setForm(emptyForm);
                setEditingId(null);
              }}
              className="rounded-lg border border-navy-950/15 px-4 py-2 font-mono text-xs text-navy-950/60"
            >
              취소
            </button>
          )}
        </div>
      </form>

      {/* 마스터 데이터 목록 */}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-navy-950/10 bg-white shadow-sm">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead>
            <tr className="border-b border-navy-950/10 text-xs text-navy-950/40">
              <th className="px-4 py-3 font-normal">Task ID</th>
              <th className="px-4 py-3 font-normal">분류</th>
              <th className="px-4 py-3 font-normal">작업</th>
              <th className="px-4 py-3 font-normal">선행</th>
              <th className="px-4 py-3 font-normal">후행 (자동)</th>
              <th className="px-4 py-3 font-normal">담당자</th>
              <th className="px-4 py-3 font-normal">상태</th>
              <th className="px-4 py-3 font-normal"></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t.id} className="border-b border-navy-950/5 hover:bg-navy-950/[0.02]">
                <td className="px-4 py-3">
                  <span className="font-mono text-xs text-navy-950/50">{t.id}</span>
                  {t.critical && (
                    <span className="ml-2 rounded-full bg-rose-600/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-rose-600">
                      CP
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-xs text-navy-950/50">
                  {t.phase} / {t.system}
                </td>
                <td className="px-4 py-3">{t.task}</td>
                <td className="px-4 py-3 font-mono text-xs text-navy-950/50">
                  {t.predecessor?.join(", ") || "-"}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-navy-950/50">
                  {successorMap[t.id]?.join(", ") || "-"}
                </td>
                <td className="px-4 py-3 text-navy-950/70">{t.owner}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={t.status} />
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => startEdit(t)}
                    className="font-mono text-xs text-teal-600 hover:underline"
                  >
                    수정
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", required, disabled }) {
  return (
    <div>
      <label className="text-xs text-navy-950/40">
        {label} {required && <span className="text-rose-600">*</span>}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-navy-950/15 px-2 py-1.5 text-sm disabled:bg-navy-950/5"
      />
    </div>
  );
}
