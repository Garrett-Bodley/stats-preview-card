import React from "react";

const StatsPreviewCard = () => {
  return (
    <main className="card">
      <header className="image-header"></header>
      <article className="card-content">
        <h1 className="card-title">
          Get insights that help your business grow.
        </h1>
        <p className="card-text">Discover the benefits of data analytics and make better decisions regarding revenue, customer 
  experience, and overall efficiency.</p>
        <section className="detail-highlights">
          <div className="detail-item">10k+ companies</div>
          <div className="detail-item">314 templates</div>
          <div className="detail-item">12m+ queries</div>
        </section>
      </article>
    </main>
  );
};

export default StatsPreviewCard;
