import { describe, it, expect } from "vitest";
import { getJobById, getJobs } from "@/features/jobs";

describe("getJobs function", () => {
  it("should return the first 20 elements when no arguments are provided", async () => {
    const elements = await getJobs({});
    expect(elements.length).toBe(20);
  });

  it("should return a number of elements specified by the limit argument", async () => {
    const limit = 40;
    const elements = await getJobs({ limit });

    expect(elements.length).toBe(limit);
  });

  it("should return the entire array if provided with a limit argument that exceeds the boundary of the array", async () => {
    const limit = 99999;
    const elements = await getJobs({ limit });

    expect(elements.length).toBeGreaterThan(0);
  });

  it("should return an empty array if provided with a skip argument that exceeds the boundary of the array", async () => {
    const limit = 20;
    const skip = 999999;
    const elements = await getJobs({ limit, skip });

    expect(elements.length).toBe(0);
  });

  it("should return an empty array if provided with a negative limit value", async () => {
    const limit = -1;
    const elements = await getJobs({ limit });

    expect(elements.length).toBe(0);
  });

  it("should return an empty array if provided with a negative skip value", async () => {
    const limit = 20;
    const skip = -1;
    const elements = await getJobs({ limit, skip });

    expect(elements.length).toBe(0);
  });

  it("should skip a number of elements specified by the skip argument", async () => {
    const limit = 20;
    const skip = 20;
    const firstTwentyElements = await getJobs({ limit });
    const nextSkippedElements = await getJobs({ limit, skip });

    expect(firstTwentyElements).not.toEqual(nextSkippedElements);
  });

  it("should return an array filtered by title", async () => {
    const title = "senior";
    const elements = await getJobs({ title });

    const isValidArr = elements.every((el) =>
      el.position.toLowerCase().includes(title.toLowerCase())
    );

    expect(isValidArr).toBeTruthy();
  });

  it("should return an array filtered by location", async () => {
    const location = "japan";
    const elements = await getJobs({ location });

    const isValidArr = elements.every((el) =>
      el.location.toLowerCase().includes(location.toLowerCase())
    );

    expect(isValidArr).toBeTruthy();
  });

  it("should return an array filled with part time jobs", async () => {
    const isFullTime = false;
    const contract = isFullTime ? "Full Time" : "Part Time";

    const elements = await getJobs({});

    const isValidArr = elements.every((el) => el.contract === contract);

    expect(isValidArr).toBeTruthy();
  });

  it("should return an array filled with full time jobs", async () => {
    const isFullTime = true;
    const contract = isFullTime ? "Full Time" : "Part Time";

    const elements = await getJobs({ isFullTime });

    const isValidArr = elements.every((el) => el.contract === contract);

    expect(isValidArr).toBeTruthy();
  });

  it("should return an array filtered by title and location", async () => {
    const title = "dev";
    const location = "united states";

    const elements = await getJobs({ title, location });

    const isValidArr = elements.every(
      (el) =>
        el.position.toLowerCase().includes(title.toLowerCase()) &&
        el.location.toLowerCase().includes(location.toLowerCase())
    );

    expect(isValidArr).toBeTruthy();
  });

  it("should return an array filtered by title and contract", async () => {
    const title = "dev";
    const isFullTime = true;
    const contract = isFullTime ? "Full Time" : "Part Time";

    const elements = await getJobs({ title, isFullTime });

    const isValidArr = elements.every(
      (el) =>
        el.position.toLowerCase().includes(title.toLowerCase()) &&
        el.contract === contract
    );

    expect(isValidArr).toBeTruthy();
  });

  it("should return an array filtered by location and contract", async () => {
    const location = "united kingdom";
    const isFullTime = false;
    const contract = isFullTime ? "Full Time" : "Part Time";

    const elements = await getJobs({ location, isFullTime });

    const isValidArr = elements.every(
      (el) =>
        el.location.toLowerCase().includes(location.toLowerCase()) &&
        el.contract === contract
    );

    expect(isValidArr).toBeTruthy();
  });

  it("should return an array filtered by title, location and contract", async () => {
    const title = "dev";
    const location = "united kingdom";
    const isFullTime = false;
    const contract = isFullTime ? "Full Time" : "Part Time";

    const elements = await getJobs({ title, location, isFullTime });

    const isValidArr = elements.every(
      (el) =>
        el.position.toLowerCase().includes(title.toLowerCase()) &&
        el.location.toLowerCase().includes(location.toLowerCase()) &&
        el.contract === contract
    );

    expect(isValidArr).toBeTruthy();
  });
});

describe("getJobById(id)", async () => {
  it("should throw an error if provided with an invalid ID", () => {
    const id = -1;

    const promise = getJobById(id);

    expect(promise).rejects.toThrow();
  });

  it("should return a single element with an ID specified by the argument ID", async () => {
    const id = 5;

    const element = await getJobById(id);

    expect(element).toBeTruthy();
    expect(element.id).toBe(id);
  });
});
