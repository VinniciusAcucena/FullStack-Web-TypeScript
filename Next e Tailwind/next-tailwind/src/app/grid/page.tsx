export default function Grid() {
    return (
        <div>
            <h1>Teste de Grid Colspan</h1>
            <div className="border p-3 grid grid-cols-4 gap-3">
                <div className="caixa">
                    caixa 1
                </div>
                <div className="caixa">
                    caixa 2
                </div>
                <div className="caixa">
                    caixa 3
                </div>
                <div className="caixa">
                    caixa 4
                </div>
                <div className="caixa col-span-4">
                    caixa 5
                </div>
                <div className="caixa col-span-2">
                    caixa 6
                </div>
                <div className="caixa">
                    caixa 7
                </div>
                <div className="caixa">
                    caixa 8
                </div>
                <div className="caixa col-start-1 col-end-4">
                    caixa 9
                </div>
                <div className="caixa">
                    caixa 10
                </div>
                <div className="caixa">
                    caixa 11
                </div>
                <div className="caixa col-start-3 col-end-5">
                    caixa 12
                </div>
            </div>

            <h1>Teste de Responsividade</h1>

            <div className="border p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                <div className="caixa col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
                    caixa 1
                </div>
                <div className="caixa xl:col-span-2">
                    caixa 2
                </div>
                <div className="caixa">
                    caixa 3
                </div>
                <div className="caixa">
                    caixa 4
                </div>
                <div className="caixa">
                    caixa 5
                </div>
                <div className="caixa">
                    caixa 6
                </div>
                <div className="caixa">
                    caixa 7
                </div>
                <div className="caixa">
                    caixa 8
                </div>
                <div className="caixa">
                    caixa 9
                </div>
                <div className="caixa">
                    caixa 10
                </div>
                <div className="caixa">
                    caixa 11
                </div>
                <div className="caixa">
                    caixa 12
                </div>
            </div>

            <h1>Alinhamentos</h1>
            <div className="border p-3 grid grid-cols-3 content-evenly gap-3">
                <div className="caixa">
                    caixa 1
                </div>
                <div className="caixa">
                    caixa 2
                </div>
                <div className="caixa">
                    caixa 3
                </div>
                <div className="caixa">
                    caixa 4
                </div>
                <div className="caixa">
                    caixa 5
                </div>
                <div className="caixa">
                    caixa 6
                </div>
                <div className="caixa">
                    caixa 7
                </div>
                <div className="caixa">
                    caixa 8
                </div>
                <div className="caixa">
                    caixa 9
                </div>
                <div className="caixa">
                    caixa 10
                </div>
                <div className="caixa">
                    caixa 11
                </div>
                <div className="caixa">
                    caixa 12
                </div>
            </div>

        </div>
    )
}