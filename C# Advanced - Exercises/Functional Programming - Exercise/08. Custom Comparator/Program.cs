﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace _08.CustomComparator
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> nums = Console.ReadLine()
                 .Split(" ", StringSplitOptions.RemoveEmptyEntries)
                 .Select(int.Parse)
                 .ToList();

            nums = nums
                .OrderBy(n => n % 2 != 0)
                .ThenBy(n => n)
                .ToList();

            Console.WriteLine(string.Join(" ", nums));
        }
    }
}
