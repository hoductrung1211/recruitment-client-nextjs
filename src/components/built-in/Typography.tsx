

interface ITextProps {
    children: React.ReactNode
}

export function SectionText({
    children
}: ITextProps) {
    return (
        <h2 className="text-xl font-semibold">
            {children}
        </h2>
    )
}