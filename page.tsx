export default function Home() {
  return (
    <div className="card">
      <h1 className="text-xl font-bold">ENOVA OS — Today</h1>
      <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))', marginTop:12}}>
        <div className="card"><b>Overdue</b><div id="overdue">—</div></div>
        <div className="card"><b>Due Today</b><div id="today">—</div></div>
        <div className="card"><b>Next 7 days</b><div id="next7">—</div></div>
      </div>
    </div>
  );
}
