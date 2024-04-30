import { CustomRangeSlider, Title, get } from '@/modules';

export default async function ExerciseTwo() {
  const data = await get(2);

  return (
    <div className="p-2 centered">
      <Title text="Exercise 2" />
      <CustomRangeSlider
        minValue={data.min}
        maxValue={data.max}
        range={data.range}
      />
    </div>
  );
}
