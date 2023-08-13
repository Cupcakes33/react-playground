import Avatar from "./common/Avatar/Avatar";
import AvatarState from "./common/Avatar/AvatarState";
import { Card, CardBody, CardFooter } from "./common/Card";
import Flex from "./common/Flex/Flex";

export default function ProFile() {
  return (
    <Card size="sm" rounded="lg" className="rounded-3xl bg-neutral-100">
      <CardBody>
        <Flex className="mt-3">
          <Avatar
            src="https://yt3.googleusercontent.com/6aLD9HFfsbrYC0ZeIZaKE_lFQVjTGG30J3wja_vCL5TL0QBpokmWKbWjeAj_LJsxz_OQ7jfr=s900-c-k-c0x00ffffff-no-rj"
            size="2xl"
          >
            <AvatarState isNew={false} />
          </Avatar>
        </Flex>
      </CardBody>
      <CardFooter>
        <Flex direction="col" className="mt-3">
          <h1 className="text-2xl font-bold text-primary">Ayatsuno Yuni</h1>
          <p className="text-mute">아야츠노 유니</p>
        </Flex>
      </CardFooter>
    </Card>
  );
}
