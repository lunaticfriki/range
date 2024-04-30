import { CustomRangeSlider, Title, get } from '@/modules';

export default async function ExerciseOne() {
  const data = await get(1);

  return (
    <div className="centered p-2">
      <Title text="Exercise 1" />
      <CustomRangeSlider minValue={data.min} maxValue={data.max} />
    </div>
  );
}
