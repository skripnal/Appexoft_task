import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddAccountModal from "./AddAccountModal";

jest.mock("@service/socialMediaApi", () => ({
  useAddAccountMutation: () => [jest.fn()],
}));

describe("AddAccountModal", () => {
  const onClose = jest.fn();

  beforeEach(() => {
    onClose.mockClear();
  });

  it("renders modal and form fields", () => {
    render(<AddAccountModal isOpen={true} onClose={onClose} />);
    expect(screen.getByText(/Add Account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Followers/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Engagement Rate/i)).toBeInTheDocument();
  });

  it("calls onClose when Cancel is clicked", () => {
    render(<AddAccountModal isOpen={true} onClose={onClose} />);
    fireEvent.click(screen.getByText(/Cancel/i));
    expect(onClose).toHaveBeenCalled();
  });

  it("submits form and calls addAccount mutation", async () => {
    const mockAddAccount = jest.fn();
    jest
      .spyOn(require("@service/socialMediaApi"), "useAddAccountMutation")
      .mockReturnValue([mockAddAccount]);
    render(<AddAccountModal isOpen={true} onClose={onClose} />);
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText(/Followers/i), {
      target: { value: 123 },
    });
    fireEvent.change(screen.getByLabelText(/Engagement Rate/i), {
      target: { value: 4.5 },
    });
    fireEvent.click(screen.getByText(/Create/i));
    await waitFor(() => {
      expect(mockAddAccount).toHaveBeenCalledWith({
        username: "testuser",
        followers: 123,
        engagement: 4.5,
        recentPost: "",
      });
      expect(onClose).toHaveBeenCalled();
    });
  });
});
