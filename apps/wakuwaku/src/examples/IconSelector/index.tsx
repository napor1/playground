import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const IconSelector = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Select Icon</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px]" sideOffset={10} align="start">
        <Tabs
          defaultValue="default"
          className=" w-full flex flex-col items-center"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="default">Default</TabsTrigger>
            <TabsTrigger value="iconFont">IconFont</TabsTrigger>
          </TabsList>
          <Input className=" mt-2" placeholder="Search icons..." />
          <TabsContent
            className="w-full h-[400px] border"
            value="default"
          ></TabsContent>
          <TabsContent
            className="w-full h-[400px] border"
            value="iconFont"
          ></TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};

export default IconSelector;
