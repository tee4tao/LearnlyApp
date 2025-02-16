import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { departments } from "@/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CtaBtn = () => {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative intouch-btn max-sm:text-sm text-white max-sm:w-32 max-sm:h-9 w-48 h-11 capitalize bg-transparent border border-purple-700 hover:text-black rounded-lg">
          start leaning
        </button>
      </DialogTrigger>
      <DialogContent
        className="  text-white flex flex-col text-center h-80 w-[90%] md:w-[40rem] px-8"
        style={{
          backgroundImage: "url('/images/popup-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-center mb-8 text-xl md:text-3xl mt-4 tracking-wide">
            What Subject Would You Like To Do?
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          {departments.map((department, index) => (
            <div
              key={index}
              // href={department.url}
              className="text-base relative flex items-center justify-between uppercase tracking-wide overlay-intouch_link cursor-pointer"
              onClick={() => router.push(`/quiz/${department.url}`)}
            >
              {department.name} subject
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CtaBtn;
