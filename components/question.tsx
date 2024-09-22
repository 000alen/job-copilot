import { Button } from "@/components/ui/button";
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
import { FileTextIcon, SparklesIcon, Loader2Icon } from "lucide-react";
import { type Question } from "@/lib/mock-data";
import { useCallback, useState } from "react";
import { sleep } from "@/lib/utils";

export function Question({
  q,
  openQuestionId,
  setOpenQuestionId,
}: {
  q: Question;
  openQuestionId: string | null;
  setOpenQuestionId: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleSubmit = useCallback(async () => {
    setLoading(true);

    await sleep(5000);
    setAnswer(q.answer);

    setLoading(false);
  }, [q.answer]);

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
            disabled={loading}
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
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={loading}
          />
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setOpenQuestionId(null)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button onClick={() => setOpenQuestionId(null)} disabled={loading}>
              Save Draft
            </Button>
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
        <Button
          // variant="outline"
          size="sm"
          className="h-8 flex-shrink-0"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              Drafting...
            </>
          ) : (
            <>
              <SparklesIcon className="mr-2 h-4 w-4" />
              Draft Response
            </>
          )}
        </Button>
      </div>
      {loading && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <div className="flex items-center justify-center space-x-2">
            <Loader2Icon className="h-5 w-5 animate-spin text-primary" />
            <span className="text-sm font-medium text-gray-700">
              AI is drafting your response...
            </span>
          </div>
        </div>
      )}
      <Separator className="mt-4" />
    </div>
  );
}
