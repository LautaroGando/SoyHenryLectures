import Image from "next/image";

export const MyComponent = () => {

    return (
        <div>
            <Image src={"/vercel.svg"} alt="Vercel Logo" width={150} height={100} loading="lazy"/>
        </div>
    )

};

export default MyComponent;