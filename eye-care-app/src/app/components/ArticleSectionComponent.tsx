type ArticleSectionComponentProps = {
    title: string
    text: string
    button: boolean
    buttonLabel?: string
    onButtonClick?: () => void
    bgColor?: string
}

export function ArticleSectionComponent({
    title,
    text,
    button,
    buttonLabel,
    onButtonClick,
    bgColor = "#ffffff",
}: ArticleSectionComponentProps) {
    return (
        <div className="flex max-w-[1200px] items-stretch justify-center">
            <div
                className="flex flex-col justify-center w-1/2 px-[60px] box-border p-[50px] max-[1260px]:p-[70px] w-full"
                style={{ backgroundColor: bgColor }}
            >
                <h1 className=" text-xl">{title}</h1>

                <section className="select-none my-[30px]" id="separator-style-2">
                    ______
                </section>

                <p>{text}</p>
                {button && (
                    <button
                        className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px] bg-[#8695C0] text-white"
                        onClick={onButtonClick}
                    >
                        {buttonLabel}
                    </button>
                )}

            </div>

            <div className="max-w-[600px] block max-[1260px]:hidden" />
        </div>
    )
}
