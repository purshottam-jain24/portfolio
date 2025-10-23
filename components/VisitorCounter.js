"use client";

import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { db } from "../lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";

const SESSION_CACHE_KEY = "portfolio-view-count";

export default function VisitorCounter() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    const loadViewCount = async () => {
      const cachedCount = sessionStorage.getItem(SESSION_CACHE_KEY);

      if (cachedCount) {
        setViews(JSON.parse(cachedCount));
      } else {
        const docRef = doc(db, "counters", "portfolio-views");
        let currentCount = 0;

        try {
          const docSnap = await getDoc(docRef);
          currentCount = docSnap.exists() ? docSnap.data().count : 0;
          const newCount = currentCount + 1;

          if (docSnap.exists()) {
            await setDoc(
              docRef,
              {
                count: increment(1),
                lastVisited: serverTimestamp(),
              },
              { merge: true }
            );
          } else {
            await setDoc(docRef, {
              count: 2,
              lastVisited: serverTimestamp(),
            });
          }

          setViews(newCount);
          sessionStorage.setItem(SESSION_CACHE_KEY, JSON.stringify(newCount));
        } catch (error) {
          console.error("Error updating view count:", error);
          setViews(currentCount);
        }
      }
    };

    loadViewCount();
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-slate-500">
      <Eye className="h-4 w-4" />
      <span>
        {views !== null
          ? `${views.toLocaleString()} views`
          : "Loading views..."}
      </span>
    </div>
  );
}
