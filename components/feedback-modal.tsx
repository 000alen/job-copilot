"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface FeedbackModalProps {
  delay?: number; // in milliseconds
}

export function FeedbackModalComponent({ delay }: FeedbackModalProps) {
  const [memoizedDelay] = useState(delay || 30000);
  const [isOpen, setIsOpen] = useState(false);
  const [hasResponded, setHasResponded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasResponded) {
        setIsOpen(true);
      }
    }, memoizedDelay); // 30 seconds

    return () => clearTimeout(timer);
  }, [hasResponded, memoizedDelay]);

  const handleResponse = (wouldUse: boolean) => {
    console.log(`User would ${wouldUse ? "" : "not "}use the app`);
    setHasResponded(true);
    setIsOpen(false);
    // Here you could send the response to your backend or analytics service
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        className="sm:max-w-[425px] bg-white"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Feedback Request</DialogTitle>
          <DialogDescription>
            We value your opinion. After trying our dashboard, we&squo;d love to
            know:
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h4 className="text-center text-lg font-semibold">
            Would you use this app?
          </h4>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button variant="outline" onClick={() => handleResponse(false)}>
            No
          </Button>
          <Button onClick={() => handleResponse(true)}>Yes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
