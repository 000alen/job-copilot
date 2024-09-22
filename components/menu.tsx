import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon,
  SparklesIcon,
  UserIcon,
  FileIcon,
  SaveIcon,
  DownloadIcon,
  PrinterIcon,
  EditIcon,
  TrashIcon,
  BriefcaseIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Menu() {
  return (
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
  );
}
