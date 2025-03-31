import { render, screen } from "@testing-library/react";
import { PageSection } from "@/src/app/_layouts/pageSection/PageSection";

describe("PageSection", () => {
  it("renders children inside the section", () => {
    render(
      <PageSection>
        <p>Test Content</p>
      </PageSection>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies provided class names and background styles", () => {
    const { container } = render(
      <PageSection background="bg-blue" className="custom-class" id="section-test" >
        <p>Styled Section </p>
      </PageSection>
    );

    const section = container.querySelector("section");
    expect(section).toHaveClass("custom-class");
    expect(section).toHaveClass("bg-blue");
    expect(section).toHaveAttribute("id", "section-test");
  });

  it("applies inner styling correctly", () => {
    const { container } = render(
      <PageSection innerStyle="inner-class" >
        <p>Inner Styled </p>
      </PageSection>
    );

    const div = container.querySelector("div");
    expect(div).toHaveClass("inner-class");
  });
});
