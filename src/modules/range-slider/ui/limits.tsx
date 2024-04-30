export const Limits = ({
  maxValue,
  minValue,
  range,
}: {
  maxValue: number;
  minValue: number;
  range?: number[];
}) => {
  return (
    <>
      <div className="flex gap-6">
        <p className="mb-2" data-testid="min-limit">
          Min limit: <span>{!range ? minValue : range[0]}</span>
        </p>
        <p className="mb-2" data-testid="max-limit">
          Max limit: <span>{!range ? maxValue : range[range.length - 1]}</span>
        </p>
      </div>
      {range ? <p data-testid="range">Range: [{range.join(', ')}]</p> : null}
    </>
  );
};
