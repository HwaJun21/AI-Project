import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <>
      <section className="bg-navy-950 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal-500">
            Migration Control Console
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight sm:text-6xl">
            Next-Gen
            <br />
            Data Migration
          </h1>
          <p className="mt-6 text-white/60">
            차세대 데이터 마이그레이션 진척관리 및 모니터링
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            to="/my-task"
            icon="📋"
            accentKey="cyan"
            title="My Task"
            lines={[
              "담당자로 지정된 작업 목록을 확인하고 진행 상태를 업데이트하는 화면입니다.",
              "계획/실제 시작·종료일 입력, 마감 임박 및 지연 작업을 한눈에 파악할 수 있습니다.",
            ]}
          />
          <ServiceCard
            to="/dashboard"
            icon="📈"
            accentKey="orange"
            title="Dashboard"
            lines={[
              "전체 이관 작업의 진행 현황과 리스크를 시각화하여 보여주는 관제 화면입니다.",
              "단계별/시스템별 진척률, 지연 작업 알림, AI 기반 리스크 예측 및 상황 요약을 제공합니다.",
            ]}
          />
          <ServiceCard
            to="/task-setting"
            icon="⚙️"
            accentKey="rose"
            title="Task Setting"
            lines={[
              "작업 항목의 5단계 분류(단계/시스템/업무/항목/작업)와 선후행 관계를 정의하는 화면입니다.",
              "Critical Path 지정, 담당자·산출물 등 작업 마스터 데이터를 등록·수정합니다.",
            ]}
          />
          <ServiceCard
            to="/task-workflow"
            icon="🗓️"
            accentKey="navy"
            title="Task Workflow"
            lines={[
              "전체 작업을 하나의 간트 차트로 보여주는 화면입니다.",
              "선후행 관계를 화살표로 확인하고, 확대·축소로 전체 일정과 상세 일정을 오가며 볼 수 있습니다.",
            ]}
          />
        </div>
      </section>
    </>
  );
}
