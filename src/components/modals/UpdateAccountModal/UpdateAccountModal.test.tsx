import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UpdateAccountModal from "./UpdateAccountModal";

jest.mock("../../service/socialMediaApi", () => ({
  useUpdateAccountMutation: () => [jest.fn()],
}));

describe("UpdateAccountModal", () => {
  const onClose = jest.fn();
  const account = {
    id: "1",
    username: "olduser",
    followers: 100,
    engagement: 2.5,
    recentPost: "old post",
  };

  beforeEach(() => {
    onClose.mockClear();
  });

  it("renders modal and form fields with initial values", () => {
    render(
      <UpdateAccountModal isOpen={true} onClose={onClose} account={account} />
    );
    expect(screen.getByText(/Update Account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toHaveValue("olduser");
    expect(screen.getByLabelText(/Followers/i)).toHaveValue(100);
    expect(screen.getByLabelText(/Engagement Rate/i)).toHaveValue(2.5);
    expect(screen.getByLabelText(/Recent Post/i)).toHaveValue("old post");
  });

  it("calls onClose when Cancel is clicked", () => {
    render(
      <UpdateAccountModal isOpen={true} onClose={onClose} account={account} />
    );
    fireEvent.click(screen.getByRole("button", { name: /Cancel/i }));
    expect(onClose).toHaveBeenCalled();
  });

  it("submits form and calls updateAccount mutation", async () => {
    const mockUpdateAccount = jest.fn();
    jest
      .spyOn(
        require("../../service/socialMediaApi"),
        "useUpdateAccountMutation"
      )
      .mockReturnValue([mockUpdateAccount]);
    render(
      <UpdateAccountModal isOpen={true} onClose={onClose} account={account} />
    );
    fireEvent.change(screen.getByLabelText(/Username/i), {
      target: { value: "newuser" },
    });
    fireEvent.change(screen.getByLabelText(/Followers/i), {
      target: { value: 200 },
    });
    fireEvent.change(screen.getByLabelText(/Engagement Rate/i), {
      target: { value: 5.5 },
    });
    fireEvent.change(screen.getByLabelText(/Recent Post/i), {
      target: { value: "new post" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Update/i }));
    await waitFor(() => {
      expect(mockUpdateAccount).toHaveBeenCalledWith({
        id: "1",
        username: "newuser",
        followers: 200,
        engagement: 5.5,
        recentPost: "new post",
      });
      expect(onClose).toHaveBeenCalled();
    });
  });
});
