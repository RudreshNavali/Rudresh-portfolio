import { Component } from "react";

function normalizeError(value) {
  if (value instanceof Error) return value;
  if (typeof value === "string") return new Error(value);
  return new Error("This feature could not be loaded.");
}

export class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error: normalizeError(error) };
  }

  componentDidUpdate(previousProps) {
    if (this.state.error && previousProps.resetKey !== this.props.resetKey) {
      this.setState({ error: null });
    }
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-start justify-center px-5 py-20 md:px-10">
        <p className="eyebrow">Feature boundary</p>
        <h1 className="mt-4 text-3xl font-semibold">This surface is resting.</h1>
        <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
          The rest of the portfolio is still available. Try the feature again or use the navigation to continue.
        </p>
        <button
          className="mt-8 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          type="button"
          onClick={() => this.setState({ error: null })}
        >
          Try again
        </button>
      </div>
    );
  }
}