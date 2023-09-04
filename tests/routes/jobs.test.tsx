import React from "react";
import { describe, it, expect, vi } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { VirtuosoGridMockContext } from "react-virtuoso";
import { getRoutes } from "../utils/routes";

const mocks = vi.hoisted(() => {
  return {
    navigate: vi.fn(),
  };
});

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: vi.fn(() => mocks.navigate),
  };
});

describe("<Jobs />", () => {
  it("should display a loading message when the component mounts for the first time", () => {
    const routes = getRoutes();
    const router = createMemoryRouter(routes, { initialEntries: ["/jobs"] });

    render(<RouterProvider router={router} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should render all the jobs after the loading message has disappeared the first time the component renders", async () => {
    const routes = getRoutes();
    const router = createMemoryRouter(routes, { initialEntries: ["/jobs"] });

    const { container } = render(<RouterProvider router={router} />, {
      wrapper: ({ children }) => (
        <VirtuosoGridMockContext.Provider
          value={{
            viewportHeight: 300,
            viewportWidth: 300,
            itemHeight: 100,
            itemWidth: 100,
          }}
        >
          {children}
        </VirtuosoGridMockContext.Provider>
      ),
    });

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const items = container.querySelectorAll(".virtuoso-grid-item");

    expect(items.length).toBeGreaterThan(0);
  });

  it("should render a list of items filtered by position based on the value typed in the position field.", async () => {
    const user = userEvent.setup();
    const routes = getRoutes();
    const router = createMemoryRouter(routes, { initialEntries: ["/jobs"] });

    const { container } = render(<RouterProvider router={router} />, {
      wrapper: ({ children }) => (
        <VirtuosoGridMockContext.Provider
          value={{
            viewportHeight: 300,
            viewportWidth: 300,
            itemHeight: 100,
            itemWidth: 100,
          }}
        >
          {children}
        </VirtuosoGridMockContext.Provider>
      ),
    });

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const position = "senior";
    const positionField = screen.getByPlaceholderText(/Filter by title/i);

    await user.type(positionField, position);
    await user.keyboard("{enter}");

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const items = container.querySelectorAll(".virtuoso-grid-item");

    const arrItems = Array.from(items);

    const isValid = arrItems.every((el) =>
      el.textContent?.toLowerCase().includes(position.toLowerCase())
    );

    expect(items.length).toBeGreaterThan(0);
    expect(isValid).toBeTruthy();
  });

  it("should render a list of items filtered by location based on the value typed in the location field.", async () => {
    const user = userEvent.setup();
    const routes = getRoutes();
    const router = createMemoryRouter(routes, { initialEntries: ["/jobs"] });

    const { container } = render(<RouterProvider router={router} />, {
      wrapper: ({ children }) => (
        <VirtuosoGridMockContext.Provider
          value={{
            viewportHeight: 300,
            viewportWidth: 300,
            itemHeight: 100,
            itemWidth: 100,
          }}
        >
          {children}
        </VirtuosoGridMockContext.Provider>
      ),
    });

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const location = "japan";
    const locationField = screen.getByPlaceholderText(/filter by location/i);

    await user.type(locationField, location);
    await user.keyboard("{enter}");

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const items = container.querySelectorAll(".virtuoso-grid-item");

    const arrItems = Array.from(items);

    const isValid = arrItems.every((el) =>
      el.textContent?.toLowerCase().includes(location.toLowerCase())
    );

    expect(items.length).toBeGreaterThan(0);
    expect(isValid).toBeTruthy();
  });

  it("should render only full-time jobs when the full-fime checkbox is not checked", async () => {
    const user = userEvent.setup();
    const routes = getRoutes();
    const router = createMemoryRouter(routes, { initialEntries: ["/jobs"] });

    const { container } = render(<RouterProvider router={router} />, {
      wrapper: ({ children }) => (
        <VirtuosoGridMockContext.Provider
          value={{
            viewportHeight: 300,
            viewportWidth: 300,
            itemHeight: 100,
            itemWidth: 100,
          }}
        >
          {children}
        </VirtuosoGridMockContext.Provider>
      ),
    });

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const contract = "Full Time";
    const fullTimeCheckbox = screen.getByLabelText(/full time/i);

    await user.click(fullTimeCheckbox);
    await user.keyboard("{tab}{enter}");

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const items = container.querySelectorAll(".virtuoso-grid-item");
    const arrItems = Array.from(items);

    const isValid = arrItems.every((i) =>
      i.textContent?.toLowerCase().includes(contract.toLowerCase())
    );

    expect(items.length).toBeGreaterThan(0);
    expect(isValid).toBeTruthy();
  });

  it("should render a list of items filtered by position, location and contract", async () => {
    const user = userEvent.setup();
    const routes = getRoutes();
    const router = createMemoryRouter(routes, { initialEntries: ["/jobs"] });

    const { container } = render(<RouterProvider router={router} />, {
      wrapper: ({ children }) => (
        <VirtuosoGridMockContext.Provider
          value={{
            viewportHeight: 300,
            viewportWidth: 300,
            itemHeight: 100,
            itemWidth: 100,
          }}
        >
          {children}
        </VirtuosoGridMockContext.Provider>
      ),
    });

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const position = "dev";
    const location = "united states";
    const contract = "Full Time";

    const positionField = screen.getByPlaceholderText(/Filter by title/i);
    const locationField = screen.getByPlaceholderText(/filter by location/i);
    const fullTimeCheckbox = screen.getByLabelText(/full time/i);

    await user.type(positionField, position);
    await user.type(locationField, location);
    await user.click(fullTimeCheckbox);
    await user.keyboard("{tab}{enter}");

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const items = container.querySelectorAll(".virtuoso-grid-item");
    const arrItems = Array.from(items);

    const isValid = arrItems.every((i) => {
      const content = i.textContent?.toLowerCase();

      return (
        content?.includes(position.toLowerCase()) &&
        content?.includes(location.toLowerCase()) &&
        content?.includes(contract.toLowerCase())
      );
    });

    expect(items.length).toBeGreaterThan(0);
    expect(isValid).toBeTruthy();
  });

  it("should navigate to the job detail page when the user clicks on an item", async () => {
    const user = userEvent.setup();
    const routes = getRoutes();
    const router = createMemoryRouter(routes, { initialEntries: ["/jobs"] });

    const { container } = render(<RouterProvider router={router} />, {
      wrapper: ({ children }) => (
        <VirtuosoGridMockContext.Provider
          value={{
            viewportHeight: 300,
            viewportWidth: 300,
            itemHeight: 100,
            itemWidth: 100,
          }}
        >
          {children}
        </VirtuosoGridMockContext.Provider>
      ),
    });

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const items = container.querySelectorAll(".virtuoso-grid-item");

    await user.click(items[0].firstElementChild!);

    expect(mocks.navigate).toHaveBeenCalled();
  });
});
