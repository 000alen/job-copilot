"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RocketIcon, LinkedinIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";

export function AuthPageComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <RocketIcon className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome to Job Copilot
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to your account or see a demo
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>
            <Button
              disabled
              type="submit"
              className="w-full"
              data-ph-capture-attribute-signup-submit-attempt
            >
              Sign In
            </Button>
          </form>

          <Separator className="flex-grow" title="OR" />

          <Button
            disabled
            variant="outline"
            className="w-full"
            data-ph-capture-attribute-signup-linkedin-attempt
          >
            <LinkedinIcon className="mr-2 h-4 w-4" />
            Sign in with LinkedIn
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link href="/job/1">
            <Button className="w-full" data-ph-capture-attribute-demo-cta>
              See Demo
            </Button>
          </Link>
          <div className="text-sm text-center text-gray-500">
            Don&rsquo;t have an account?{" "}
            <Link href="/auth" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
