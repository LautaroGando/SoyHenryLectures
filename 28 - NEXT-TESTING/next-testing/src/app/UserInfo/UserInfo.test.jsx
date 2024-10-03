import { screen, render, waitFor } from "@testing-library/react";
import UserInfo from "./UserInfo";

beforeEach(() => {

    global.fetch = jest.fn(() =>

        Promise.resolve({
            json: () => Promise.resolve({ name: "Lautaro", email: "lau@gmail.com" }),
        }),

    );

});

afterEach(() => {

    jest.clearAllMocks();

});

test("Loads and display user info", async () => {

    render(<UserInfo userId="1" />);

    await waitFor(() => screen.getByText("Lautaro"));

    expect(screen.getByText("Lautaro")).toBeInTheDocument();
    expect(screen.getByText("Email: lau@gmail.com")).toBeInTheDocument();

});