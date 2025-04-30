type faq = {
    title: string;
    questions: Array<{
        question: string;
        answer: string;
    }>
}

export default function FAQ({ questions, title }: faq) {

    return (
        <div>
            <h3 className="text-lg font-bold" >{title}</h3>
            <dl className="space-y-2 mt-4">
                {
                    questions.map(({ answer, question }) => {
                        return (
                            <details className="bg-stone-100/40 focus:bg-[#FFC017]/40 hover:bg-[#FFC017]/40 py-3 linear duration-150 px-6 rounded-2xl cursor-pointer">
                                <summary className="flex justify-between">
                                    <h4 className="text-lg font-bold" >{question}</h4>
                                </summary>
                                <p className="prose text-md linear duration-150" id={question} >
                                    {answer}
                                </p>
                            </details>
                        )
                    })
                }
            </dl>
        </div>
    )
}