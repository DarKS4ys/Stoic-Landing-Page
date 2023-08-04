import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export default function FrequentlyAskedQuestions(){
    return(
        <div>
            <div className='mt-20 justify-center items-center flex flex-col'>
            <h2 className='font-semibold text-[var(--highlight)] text-xl mb-2'>FAQ</h2>
            <h1 className='text-4xl font-semibold text-center mb-4'>Have Any Questions?</h1>
            <p className='text-sm font-thin text-center'>Your burning questions, answered swiftly and succinctly.</p>
            <div className="md:w-6/12 w-9/12 mt-5 flex flex-col">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is this a scam?</AccordionTrigger>
                        <AccordionContent>Yes. This is a pyramid scheme.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>How much is this?</AccordionTrigger>
                        <AccordionContent>This program costs 29.99€.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Are you racist?</AccordionTrigger>
                        <AccordionContent>Yes.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Are you racist?</AccordionTrigger>
                        <AccordionContent>Yes.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
      </div>
    )
}