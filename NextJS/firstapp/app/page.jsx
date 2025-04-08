import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className=" bg-amber-400 text-4xl">Home</h1>
      <Button variant='destructive' className=" w-full p-10">THis is a Button</Button>
      <div className=" bg-[#f2f9ff] mt-2 p-3">
        <Accordion type="single" collapsible className="border p-3 rounded-xl shadow">
          <AccordionItem value="First">
            <AccordionTrigger>First Accordian</AccordionTrigger>
            <AccordionContent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ratione odit animi enim corporis ex libero qui aliquam. Non provident totam dignissimos ab debitis odit suscipit perspiciatis. Laboriosam, molestiae inventore!</AccordionContent>
          </AccordionItem>
          <AccordionItem value="Second">
            <AccordionTrigger>Second Accordian</AccordionTrigger>
            <AccordionContent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ratione odit animi enim corporis ex libero qui aliquam. Non provident totam dignissimos ab debitis odit suscipit perspiciatis. Laboriosam, molestiae inventore!</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
