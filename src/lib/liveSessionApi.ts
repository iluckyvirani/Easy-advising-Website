import axios from "axios";
import { BASE_URL } from "@/lib/constants";
import type { LiveSession } from "@/types/liveSession";

export async function fetchLiveSession(identifier: string): Promise<LiveSession> {
  const res = await axios.get<LiveSession>(
    `${BASE_URL}/api/live-sessions/${encodeURIComponent(identifier)}`
  );
  return res.data;
}
