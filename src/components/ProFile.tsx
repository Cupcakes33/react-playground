import { Card, CardBody, CardFooter, CardHeader } from "./Card";
import Flex from "./Flex";

export default function ProFile() {
  return (
    <Card size="sm" rounded="lg" className="rounded-3xl">
      <CardHeader>
        <Flex direction="col" className="gap-2">
          <h1>Profile</h1>
          <p className="text-neutral-400">Yuni</p>
        </Flex>
      </CardHeader>
      <CardBody>
        <div className="mt-4 text-xl font-bold">Yuni</div>
      </CardBody>
      <CardFooter>
        <div className="flex justify-between">
          <div className="text-sm text-neutral-400"></div>
        </div>
      </CardFooter>
    </Card>
  );
}
