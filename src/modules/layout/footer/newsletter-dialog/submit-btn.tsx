import LoaderIcon from "@/modules/common/icons/loader";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className="py-3 w-full sm:w-fit px-6 flex items-center justify-center text-center rounded-full border-3 border-(--primary) transition-all bg-(--background) hover:bg-(--primary)/10 active:bg-(--primary)/20 focus-visible:ring-(--ring) focus-visible:ring-3 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      disabled={pending}
    >
      {pending && <LoaderIcon className="size-5 mr-2 animate-spin" />}
      {children}
    </button>
  );
}
