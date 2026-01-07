import Image from "next/image";

export default function Flutuante() {
    return (
        <div className="border p-3">
            <div className="border p-3">
                <Image 
                    className="float-right m-2"
                    src="/img/cidade.jpg"
                    alt=""
                    width={120}
                    height={120}/>

                <h1>
                    Pontos flutuantes
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore temporibus, maxime facilis tempore alias laboriosam placeat pariatur tenetur rerum debitis ullam fugiat, esse ratione iste perferendis ipsum nisi doloribus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore temporibus, maxime facilis tempore alias laboriosam placeat pariatur tenetur rerum debitis ullam fugiat, esse ratione iste perferendis ipsum nisi doloribus.
                </p>
            </div>

            <div className="border mt-5 p-3">
                <h1>
                    Positions (Static and Relative)
                </h1>
                <p className="bg-orange-400 m-2">
                    Destaque <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestiae sit. Aspernatur voluptates voluptatibus cumque magnam id ipsa, placeat illo doloremque dolorum inventore ex, consequuntur tempora animi neque, fugit accusamus?
                </p>
                <p className="bg-purple-500 m-2 relative top-2 left-4">
                    Item 1 <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestiae sit. Aspernatur voluptates voluptatibus cumque magnam id ipsa, placeat illo doloremque dolorum inventore ex, consequuntur tempora animi neque, fugit accusamus?
                </p>
                <p className="bg-gray-500 m-2">
                    Item 2 <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestiae sit. Aspernatur voluptates voluptatibus cumque magnam id ipsa, placeat illo doloremque dolorum inventore ex, consequuntur tempora animi neque, fugit accusamus?
                </p>
            </div>

            <div className="border mt-5 p-3">
                <h1>
                    Positions (absolute, fixed and stick)
                </h1>
                <p className="bg-orange-400 m-2 fixed top-2">
                    Destaque <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestiae sit. Aspernatur voluptates voluptatibus cumque magnam id ipsa, placeat illo doloremque dolorum inventore ex, consequuntur tempora animi neque, fugit accusamus?
                </p>
                <p className="bg-purple-500 m-2 absolute bottom-0 z-5">
                    Item 1 <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestiae sit. Aspernatur voluptates voluptatibus cumque magnam id ipsa, placeat illo doloremque dolorum inventore ex, consequuntur tempora animi neque, fugit accusamus?
                </p>
                <p className="bg-gray-500 m-2 sticky bottom-1">
                    Item 2 <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, molestiae sit. Aspernatur voluptates voluptatibus cumque magnam id ipsa, placeat illo doloremque dolorum inventore ex, consequuntur tempora animi neque, fugit accusamus?
                </p>
            </div>
        </div>
    )
}