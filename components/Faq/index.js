import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export default function FrequentlyAskedQuestions(){
    return(
        <div>
            <div className='mt-20 justify-center items-center flex flex-col'>
            <h2 className='font-semibold text-[var(--highlight)] text-2xl mb-2'>FAQ</h2>
            <h1 className='text-5xl font-semibold text-center mb-4'>Have Any Questions?</h1>
            <p className='text-sm font-thin text-center'>Your burning questions, answered swiftly and succinctly.</p>
            <div className="md:w-8/12 w-9/12 mt-5 mb-5 text-xl flex flex-col">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Do I need money to start?</AccordionTrigger>
                        <AccordionContent>No. We will teach you how to start with $0. The only money you need is for the subscription.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Do I need to know how to edit?</AccordionTrigger>
                        <AccordionContent>We will teach you how to edit if you have an editing software, if not you can always use an AI video editor which requires no editing on your end.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Does my age matter?</AccordionTrigger>
                        <AccordionContent>Of course not, we believe that age should never be a barrier to learning and pursuing your passions. Whether you are a teenager or an adult our program is designed to cater to learners of all ages.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>How quickly will I get views?</AccordionTrigger>
                        <AccordionContent>The quicker you implement the lessons we teach the sooner you will see results, that coupled with the effort you put in.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>I do not have a lot of time available, can I still join?</AccordionTrigger>
                        <AccordionContent>Absolutely! We understand everyone has different time constraints and we considered this when making the program therefore we can work with the hours you have.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>I live in X country, is it a problem?</AccordionTrigger>
                        <AccordionContent>We welcome participants from all countries, including your country! Our course is designed to be accessible and beneficial to individuals worldwide. Regardless of your location, the results will be the same.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
      </div>
    )
}