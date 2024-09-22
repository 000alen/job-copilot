import Dashboard from "@/components/dashboard";
import { jobApplications } from "@/lib/mock-data";

export default function Job({
  params: { jobId },
}: {
  params: { jobId: string };
}) {
  const jobApplication = jobApplications.find(
    (app) => app.id.toString() === jobId.toString()
  );

  if (!jobApplication) {
    return <div>Job not found</div>;
  }

  return <Dashboard jobApplication={jobApplication} />;
}
