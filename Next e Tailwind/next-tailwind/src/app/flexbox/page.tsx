export default function Flex() {
    return (
        <div>
            <h1>
                FlexBox Row
            </h1>
            <div className="border p-3 flex flex-row gap-2 justify-end items-center">
                <div className="caixa basis-64">
                    Caixa 1
                </div>
                <div className="caixa basis-56 h-20">
                    Caixa
                </div>
                <div className="caixa basis-40">
                    Caixa
                </div>
            </div>

            <h1>
                Flexbox Column
            </h1>
            <div className="border p-3 flex flex-col gap-2 justify-between items-start">
                <div className="caixa basis-10">
                    Caixa 1
                </div>
                <div className="caixa basis-10 order-first">
                    Caixa
                </div>
                <div className="caixa basis-10 order-last">
                    Caixa
                </div>
            </div>

            <h1>
                Flexbox Wrap
            </h1>
            <div className="border p-3 flex flex-row flex-wrap gap-2 justify-around">
                <div className="caixa basis-64 order-3">
                    Caixa 1
                </div>
                <div className="caixa basis-64 order-1 grow shrink">
                    Caixa 2
                </div>
                <div className="caixa basis-64 order-3">
                    Caixa 3
                </div>
            </div>

        </div>
    )
}