export function AnalysisInProgress({ tabType }: { tabType: string }) {
  return (
    <span className="lift-tab__in-progress-message">
      <div className="nx-card-container">
        <section className="nx-card nx-card--equal">
          <div className="nx-card__call-out">
            <img
              className="nx-card__call-out-icon"
              src="/images/analysis/scanning.svg"
              alt="ScanningIcon"
            />
          </div>
          <header className="nx-card__header">
            <h2 className="nx-h2 nx-h2--card-header lift-analysis-tab__data-header">
              We are analyzing your branch, come back in a bit.
            </h2>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text lift-analysis-tab__data-message">
              {tabType} data will be available once the scan is complete.
            </div>
          </div>
        </section>
      </div>
    </span>
  );
}
