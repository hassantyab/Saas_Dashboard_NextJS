export default function AnomalyList() {
  return (
    <div className="card p-6 mt-6">
      <h2 className="mb-4 font-semibold">Anomalous Growth Indicators</h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-gray-50 flex justify-between">
          <div>
            <p className="font-medium">Regional Surge</p>
            <p className="text-sm text-gray-500">
              Lead generation increased by 210%
            </p>
          </div>
          <span className="text-blue-500">Action Required</span>
        </div>

        <div className="p-4 rounded-xl bg-gray-50 flex justify-between">
          <div>
            <p className="font-medium">Cost Efficiency Warning</p>
            <p className="text-sm text-gray-500">
              Budget exceeded by $12k
            </p>
          </div>
          <span className="text-red-500">Review</span>
        </div>
      </div>
    </div>
  );
}