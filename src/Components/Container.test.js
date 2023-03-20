import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Şehirler yüklendi mi", () => {
  render(<Header />);
  const sehir = screen.getByText(/Bursa/i);
  expect(sehir).toBeInTheDocument();
});
