import { statusStyle } from "../data/mockTasks";

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium ${statusStyle[status] || ""}`}
    >
      {status}
    </span>
  );
}
