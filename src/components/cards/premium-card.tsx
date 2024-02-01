import { cn } from '@/lib/utils';
import { CardContent, CardDescription, CardTitle } from '../ui/card';
import { Paper } from '../ui/paper';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Icons } from '../icons';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function PremiumCard() {
  const data = {
    title: 'Premium',
    price: '$20',
    header: 'Explore the world of golf',
    content:
      'For this package you can register your details and get premium golf',
    icon: <Icons.box />,
    plan: 'Paid',
    src: '/premium.svg',
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Paper
          className="min-h-[300px] flex flex-col px-8 pt-8 text-start justify-start transform transition hover:scale-[.99] duration-300 ease-linear w-full"
          variant="destructive"
        >
          <CardTitle>{data.title}</CardTitle>
          <div className="flex  justify-between">
            <CardDescription className="pt-6 text-4xl">
              {data.price}
            </CardDescription>

            <Image
              src={data.src}
              width={200}
              height={200}
              alt="Premium Card Icon"
            />
          </div>
          <CardContent>{data.header}</CardContent>
          <CardContent>{data.content}</CardContent>
          <div className="pt-20 relative">
            <span
              className={cn(
                'h-6 w-24 rounded-t-sm absolute bottom-0 text-white text-center',
                'bg-destructive-foreground'
              )}
            >
              {data.plan}
            </span>
          </div>
        </Paper>
      </DialogTrigger>
      <DialogContent className="absolute">
        <DialogHeader>
          <DialogTitle className="text-3xl">
            Are you registering for a family?
          </DialogTitle>
          <DialogDescription>
            This will help us recommend the best resume templates for your
            experience level.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex mx-auto items-center justify-center flex-wrap gap-4 ">
          {[1, 2, 3, 4, 5].map((idx) => (
            <Link key={idx} href={'/register'}>
              <Button
                className="border border-ring hover:border-primary"
                variant="ghost"
                size="lg"
              >
                0 - 3yrs
              </Button>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}