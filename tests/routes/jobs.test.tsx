import { describe, it, expect, afterEach } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { appRoutes } from "@/routes";
import { QueryClientProvider } from "react-query";
import { VirtuosoGridMockWrapper, getQueryClient } from "@/utils";
import "@testing-library/jest-dom/vitest";

describe("<Jobs />", () => {
  let user = userEvent.setup();
  let queryclient = getQueryClient();
  const itemsQuery = "div[class^='_job_item_container']";

  afterEach(() => {
    queryclient = getQueryClient();
    user = userEvent.setup();
  });

  const waitForItemsTobeRetrieved = async (
    container: HTMLElement,
    query: string
  ) => {
    let items = container.querySelectorAll(query);

    await waitFor(() => {
      items = container.querySelectorAll(query);
      expect(items.length).toBeGreaterThan(0);
    });

    return items;
  };

  it("should display a loading message when the component mounts for the first time", () => {
    const router = createMemoryRouter(appRoutes, { initialEntries: ["/jobs"] });

    render(
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should display all the jobs the first time the component mounts after the loading message disappears", async () => {
    const router = createMemoryRouter(appRoutes, { initialEntries: ["/jobs"] });

    const { container } = render(
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
      {
        wrapper: VirtuosoGridMockWrapper({
          viewportHeight: 1000,
          viewportWidth: 1000,
          itemHeight: 100,
          itemWidth: 100,
        }),
      }
    );

    const items = await waitForItemsTobeRetrieved(container, itemsQuery);

    expect(items.length).toBeGreaterThan(0);
  });

  it("should render a list of items filtered by position based on the value typed in the position field.", async () => {
    const router = createMemoryRouter(appRoutes, { initialEntries: ["/jobs"] });
    const position = "senior";

    const { container } = render(
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
      {
        wrapper: VirtuosoGridMockWrapper({
          viewportHeight: 1000,
          viewportWidth: 1000,
          itemHeight: 100,
          itemWidth: 100,
        }),
      }
    );

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const positionInput = screen.getByPlaceholderText(/Filter by title/i);

    await user.type(positionInput, position);
    await user.keyboard("{enter}");

    const items = await waitForItemsTobeRetrieved(container, itemsQuery);

    const arrItems = Array.from(items);

    const isValid = arrItems.every((el) =>
      el.textContent?.toLowerCase().includes(position.toLowerCase())
    );

    expect(isValid).toBeTruthy();
  });

  it("should render a list of items filtered by location based on the value typed in the location field.", async () => {
    const router = createMemoryRouter(appRoutes, { initialEntries: ["/jobs"] });
    const location = "japan";

    const { container } = render(
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
      {
        wrapper: VirtuosoGridMockWrapper({
          viewportHeight: 1000,
          viewportWidth: 1000,
          itemHeight: 100,
          itemWidth: 100,
        }),
      }
    );

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const locationInput =
      screen.getAllByPlaceholderText(/filter by location/i)[1];

    await user.type(locationInput, location);
    await user.keyboard("{enter}");

    const items = await waitForItemsTobeRetrieved(container, itemsQuery);

    const arrItems = Array.from(items);

    const isValid = arrItems.every((el) =>
      el.textContent?.toLowerCase().includes(location.toLowerCase())
    );

    expect(isValid).toBeTruthy();
  });

  it("should render only full-time jobs when the full-fime checkbox is not checked", async () => {
    const router = createMemoryRouter(appRoutes, { initialEntries: ["/jobs"] });
    const contract = "Full Time";

    const { container } = render(
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
      {
        wrapper: VirtuosoGridMockWrapper({
          viewportHeight: 1000,
          viewportWidth: 1000,
          itemHeight: 100,
          itemWidth: 100,
        }),
      }
    );

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const fullTimeCheckbox = screen.getAllByLabelText(/full time/i)[1];

    await user.click(fullTimeCheckbox);
    await user.keyboard("{tab}{enter}");

    const items = await waitForItemsTobeRetrieved(container, itemsQuery);

    const arrItems = Array.from(items);

    const isValid = arrItems.every((i) =>
      i.textContent?.toLowerCase().includes(contract.toLowerCase())
    );

    expect(isValid).toBeTruthy();
  });

  it("should render a list of items filtered by position, location and contract", async () => {
    const router = createMemoryRouter(appRoutes, { initialEntries: ["/jobs"] });
    const position = "dev";
    const location = "united states";
    const contract = "Full Time";

    const { container } = render(
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
      {
        wrapper: VirtuosoGridMockWrapper({
          viewportHeight: 1000,
          viewportWidth: 1000,
          itemHeight: 100,
          itemWidth: 100,
        }),
      }
    );

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const positionInput = screen.getByPlaceholderText(/Filter by title/i);
    const locationInput =
      screen.getAllByPlaceholderText(/filter by location/i)[1];
    const fullTimeCheckbox = screen.getAllByLabelText(/full time/i)[1];

    await user.type(positionInput, position);
    await user.type(locationInput, location);
    await user.click(fullTimeCheckbox);
    await user.keyboard("{tab}{enter}");

    const items = await waitForItemsTobeRetrieved(container, itemsQuery);
    const arrItems = Array.from(items);

    const isValid = arrItems.every((i) => {
      const content = i.textContent?.toLowerCase();

      return (
        content?.includes(position.toLowerCase()) &&
        content?.includes(location.toLowerCase()) &&
        content?.includes(contract.toLowerCase())
      );
    });

    expect(isValid).toBeTruthy();
  });

  it("should navigate to the job detail page when the user clicks on an item", async () => {
    const router = createMemoryRouter(appRoutes, { initialEntries: ["/jobs"] });

    const { container } = render(
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
      {
        wrapper: VirtuosoGridMockWrapper({
          viewportHeight: 1000,
          viewportWidth: 1000,
          itemHeight: 100,
          itemWidth: 100,
        }),
      }
    );

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    const items = await waitForItemsTobeRetrieved(container, itemsQuery);

    await user.click(items[0]);

    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    expect(
      screen.getAllByRole("link", { name: /apply now/i }).length
    ).toBeGreaterThan(0);
  });
});
