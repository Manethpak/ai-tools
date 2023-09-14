import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
};

const RepoCard = ({
  title,
  description,
  url,
  stars,
  forks,
  language,
}: Props) => {
  return (
    <Card className="min-w-[12rem] hover:bg-muted/60 transition-all">
      <Link href={url} target="_blank">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            <div className="flex gap-2">
              <Badge>{stars} stars</Badge>
              <Badge>{forks} forks</Badge>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <CardFooter className="flex justify-between">
          {language && (
            <Badge variant="outline" className="text-sm text-muted-foreground">
              {language}
            </Badge>
          )}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default RepoCard;
