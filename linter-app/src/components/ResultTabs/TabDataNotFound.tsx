export function TabDataNotFound({
  tabType,
  message,
}: {
  tabType: string;
  message: string;
}) {
  return (
    <span className="puv-tab__not-found-message">
      <div className="nx-card-container">
        <section className="nx-card nx-card--equal">
          <div className="nx-card__call-out">
            <img
              className="nx-card__call-out-icon"
              src="/images/analysis/no-data.svg"
              alt="NoDataIcon"
            />
          </div>
          <header className="nx-card__header">
            <h2 className="nx-h2 nx-h2--card-header puv-tab__not-found-data-header">
              {tabType} data is unavailable in this report.
            </h2>
          </header>
          <div className="nx-card__content">
            <div className="nx-card__text puv-tab__not-found-data-message">
              {message}
            </div>
          </div>
        </section>
      </div>
    </span>
  );
}
