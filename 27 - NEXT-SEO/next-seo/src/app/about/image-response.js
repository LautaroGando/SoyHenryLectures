import { ImageResponse } from "next/og";

export const alt = "Acerca de nosotros";
export const size = {
    width: 800,
    height: 400,
};
export const contentType = "image/jpeg";

export const Image = () => {

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                }}
            >
                ¡Acerca de nosotros!
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "Inter",
                    data: inter,
                },
                {
                    name: "Lato",
                    data: lato,
                },
            ],
        },
    );

};

export default Image;