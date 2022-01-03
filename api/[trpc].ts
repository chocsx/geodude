import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { inferAsyncReturnType } from "@trpc/server";

const prisma = new PrismaClient();

const MAX_DEX_ID = 493;