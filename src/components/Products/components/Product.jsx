import "../style.css"

export default function Product({titulo, imagen, precio, descripcion, descuento, ultimo, id}) {
    const MAX_LENGTH = 100;
    const truncatedDescription = descripcion.length > MAX_LENGTH
      ? descripcion.substring(0, MAX_LENGTH) + '...'
      : descripcion;

    return (
        <div className={`product-item  flex flex-col justify-between w-64 m-auto sm:w-full sm:h-full ${!ultimo ? 'border-gray-500 opacity-90 border-r' : ''}`} >
            <img className="mx-auto w-64 h-64" src={imagen} alt={titulo} />
            <p className="text-center text-4xl text-zinc-200">
                ${precio}
                {descuento && (
                <>
                    <span className="text-xl text-red-500 line-through ml-2">
                        ${Math.trunc(((100 + descuento) * precio) / 100)}
                    </span>
                    <span className="text-lg text-red-500 ml-2">
                        {descuento}% OFF
                    </span>
                </>
                )}
            </p>

            <h3 className="text-blue-400 text-2xl text-center ">{titulo}</h3>
            <p className="text-zinc-400 text-xl text-center">{truncatedDescription}</p>
            <div className="mx-auto flex gap-10 mt-5">
                <button className="text-4xl bg-blue-500 rounded-full w-16 h-16 hover:bg-blue-800">
                    🛒
                </button>
                <button className="text-4xl bg-blue-500 rounded-full w-16 h-16 hover:bg-blue-800">
                    👁️
                </button>
            </div>
        </div>
    );
}