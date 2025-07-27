import MapPinIcon from "@/modules/common/icons/map-pin";

export default function Location({
  iframeLoading = "lazy",
  className,
}: {
  iframeLoading?: "lazy" | "eager" | undefined;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <MapPinIcon className="size-5 sm:size-6 md:size-8 text-(--primary) shrink-0" />
        <h3 className="uppercase text-lg sm:text-xl md:text-2xl font-semibold">
          Kako do nas
        </h3>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.399432468279!2d15.964981276585418!3d45.803258310751865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6f02d84b2b1%3A0x46fd8f0b153a7895!2sTeatar%20%26TD!5e0!3m2!1shr!2shr!4v1751740443420!5m2!1shr!2shr"
        width="100%"
        height="450"
        loading={iframeLoading}
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 mt-6 lg:min-w-lg"
      />
      <p className="sm:text-lg md:text-xl mt-4">
        Teatar &TD, Studentski centar u Zagrebu, Savska 25, Zagreb
      </p>
    </div>
  );
}
