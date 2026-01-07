export default function Container() {
    return(
        <div>
            <div className=" p-3 container mx-auto bg-green-400 border">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus labore neque, soluta officia, expedita corporis esse provident minus aut praesentium vel suscipit ratione at sequi tempore tenetur ducimus eius excepturi!</p>
            
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
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum corrupti natus eos quaerat voluptas pariatur tempore accusamus, sit cupiditate sint reiciendis esse iusto, nobis consequuntur illum doloribus aperiam! Magni.</p>
            </div>
        </div>
    )
}