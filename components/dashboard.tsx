"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon,
  SparklesIcon,
  UserIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  ShareIcon,
  FileIcon,
  SaveIcon,
  DownloadIcon,
  PrinterIcon,
  EditIcon,
  TrashIcon,
  BriefcaseIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { jobApplications, userProfile, type Question } from "@/lib/mock-data";

function Question({
  q,
  openQuestionId,
  setOpenQuestionId,
}: {
  q: Question;
  openQuestionId: number | null;
  setOpenQuestionId: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <div key={q.id}>
      <Dialog
        open={openQuestionId === q.id}
        onOpenChange={(open) => {
          if (!open) setOpenQuestionId(null);
        }}
      >
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-start p-0 text-left"
            onClick={() => setOpenQuestionId(q.id)}
          >
            <h4 className="font-medium truncate">{q.question}</h4>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle>{q.question}</DialogTitle>
            <DialogDescription>
              Answer the question below. Word limit: {q.wordLimit} words.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Type your answer here..."
            className="h-[200px]"
          />
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setOpenQuestionId(null)}>
              Cancel
            </Button>
            <Button onClick={() => setOpenQuestionId(null)}>Save Draft</Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center space-x-2 overflow-hidden">
          <FileTextIcon className="h-4 w-4 flex-shrink-0 text-gray-500" />
          <span className="text-xs text-gray-500 truncate">
            {q.wordLimit} words limit
          </span>
        </div>
        <Button variant="outline" size="sm" className="h-8 flex-shrink-0">
          <SparklesIcon className="mr-2 h-4 w-4" />
          Draft Response
        </Button>
      </div>
      <Separator className="mt-4" />
    </div>
  );
}

export default function Dashboard() {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);
  const [selectedApp, setSelectedApp] = useState("job-application");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedJobApp, setSelectedJobApp] = useState(jobApplications[0]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header with macOS-like menu and application selector */}
      <header className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  File
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <FileIcon className="mr-2 h-4 w-4" />
                  <span>New Application</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SaveIcon className="mr-2 h-4 w-4" />
                  <span>Save Progress</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  <span>Export as PDF</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PrinterIcon className="mr-2 h-4 w-4" />
                  <span>Print</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <EditIcon className="mr-2 h-4 w-4" />
                  <span>Edit Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TrashIcon className="mr-2 h-4 w-4" />
                  <span>Delete Application</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>User Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BriefcaseIcon className="mr-2 h-4 w-4" />
                  <span>Job Listings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  <span>Application Status</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  Tools
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <SparklesIcon className="mr-2 h-4 w-4" />
                  <span>AI Resume Review</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Interview Scheduler</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DollarSignIcon className="mr-2 h-4 w-4" />
                  <span>Salary Calculator</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Select value={selectedApp} onValueChange={setSelectedApp}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select application" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="job-application">Job Application</SelectItem>
              <SelectItem disabled value="resume-builder">
                Resume Builder
              </SelectItem>
              <SelectItem disabled value="interview-prep">
                Interview Prep
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="flex space-x-4">
            <Button disabled variant="ghost" size="sm">
              <ShareIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content with sidebar */}
      <div className="flex flex-grow">
        {/* Collapsible sidebar */}
        <aside
          className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
            sidebarOpen ? "w-64" : "w-16"
          }`}
        >
          <div className="p-4">
            <Button
              variant="outline"
              className="w-full justify-between"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <>
                  Job Applications
                  <ChevronLeftIcon className="h-4 w-4" />
                </>
              ) : (
                <ChevronRightIcon className="h-4 w-4" />
              )}
            </Button>
          </div>
          {sidebarOpen && (
            <div className="px-4 py-2">
              {jobApplications.map((app) => (
                <Button
                  key={app.id}
                  variant="ghost"
                  className={`w-full justify-start mb-2 ${
                    selectedJobApp.id === app.id ? "bg-gray-100" : ""
                  }`}
                  onClick={() => setSelectedJobApp(app)}
                >
                  <div className="text-left">
                    <div className="font-medium">{app.company}</div>
                    <div className="text-sm text-gray-500">{app.position}</div>
                  </div>
                </Button>
              ))}
              <Button disabled variant="outline" className="w-full mt-4">
                <PlusIcon className="h-4 w-4 mr-2" />
                New Application
              </Button>
            </div>
          )}
        </aside>

        {/* Main dashboard content */}
        <main className="flex-grow p-4 md:p-6 lg:p-8">
          <h1 className="mb-6 text-3xl font-bold text-gray-900">
            {selectedJobApp.company} - {selectedJobApp.position}
          </h1>
          <div className="grid h-[calc(100vh-16rem)] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* User Information Panel */}
            <Card className="flex flex-col overflow-hidden">
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-y-auto">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200">
                    <UserIcon className="h-12 w-12 p-2 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {userProfile.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {userProfile.position}
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Work Experience</h4>
                    <ul className="mt-2 space-y-2 text-sm">
                      {userProfile.workExperience.map((w, i) => (
                        <li key={i}>
                          {w.position} at {w.company} ({w.startDate}-{w.endDate}
                          )
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Projects</h4>
                    <ul className="mt-2 space-y-2 text-sm">
                      {userProfile.projects.map((p, i) => (
                        <li key={i}>{p.name}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Skills</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {userProfile.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <h4 className="font-medium">Resume Optimization</h4>
                  <Progress
                    value={userProfile.resumeOptimization}
                    className="h-2 w-full"
                  />
                  <p className="text-sm text-gray-500">
                    {userProfile.resumeOptimization.toFixed(0)}% - Great
                    progress!
                  </p>
                </div>
                <Button disabled className="mt-4 w-full">
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            {/* Job Posting Information Panel */}
            <Card className="flex flex-col overflow-hidden">
              <CardHeader>
                <CardTitle>Job Posting</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-y-auto">
                <h3 className="text-lg font-semibold">
                  {selectedJobApp.position}
                </h3>
                <p className="text-sm text-gray-500">
                  {selectedJobApp.company}
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">
                      Deadline: ${selectedJobApp.deadline}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSignIcon className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">
                      Salary: {selectedJobApp.salary}
                    </span>
                  </div>
                </div>
                <Separator className="my-4" />
                <h4 className="font-medium">Job Description</h4>
                <p className="mt-2 text-sm text-gray-600">
                  {selectedJobApp.description}
                </p>
                <h4 className="mt-4 font-medium">Requirements</h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-600">
                  {selectedJobApp.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                <Button disabled variant="outline" className="mt-4 w-full">
                  View Full Job Description
                </Button>
              </CardContent>
            </Card>

            {/* Application Questions Panel */}
            <Card className="flex flex-col overflow-hidden">
              <CardHeader>
                <CardTitle>Application Questions</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow overflow-y-auto">
                <div className="space-y-4">
                  {selectedJobApp.questions.map((q) => (
                    <Question
                      key={q.id}
                      q={q}
                      openQuestionId={openQuestionId}
                      setOpenQuestionId={setOpenQuestionId}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Footer with global progress */}
      <footer className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Application Progress</span>
          <div className="w-2/3">
            <Progress value={selectedJobApp.progress} className="h-2 w-full" />
          </div>
          <span className="text-sm font-medium">
            {selectedJobApp.progress.toFixed(0)}%
          </span>
        </div>
      </footer>
    </div>
  );
}
