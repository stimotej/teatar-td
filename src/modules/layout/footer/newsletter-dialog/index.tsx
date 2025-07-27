import { cn } from "@/lib/utils/cn";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/modules/common/components/dialog";
import NewsletterForm from "./form";

export default function NewsletterDialog({
  className,
}: {
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "uppercase text-sm tracking-widest hover:underline",
          className
        )}
      >
        Prijava na newsletter
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50" />
        <DialogContent>
          <DialogTitle>Newsletter</DialogTitle>
          <DialogDescription>Prijava na naš newsletter</DialogDescription>
          <NewsletterForm />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
