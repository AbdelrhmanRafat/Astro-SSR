import React from 'react';

const ShimmerLoader = () => {
  // Shimmer skeleton components
  const ProductItemSkeleton = () => (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg animate-pulse">
      <div className="w-16 h-16 bg-gray-200 rounded"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="text-right">
        <div className="h-5 bg-gray-200 rounded w-20 mb-1"></div>
        <div className="h-3 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  );

  const FormFieldSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
      <div className="h-10 bg-gray-200 rounded w-full"></div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-center items-center md:items-start">
      
      {/* Right Sidebar Skeleton - Combined Form */}
      <div className="w-full md:w-1/2">
        
        {/* Combined Personal Info & Shipping Form Skeleton */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-6 flex flex-col justify-start items-start gap-3">
          {/* Contact Info Header */}
          <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
          
          {/* Contact Info Fields */}
          <div className="space-y-4 w-full">
            <div className="animate-pulse">
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
            <div className="flex items-center gap-2 animate-pulse">
              <div className="h-4 w-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>

          {/* Shipping Address Header */}
          <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse mt-4"></div>
          
          {/* Shipping Address Fields */}
          <div className="space-y-4 w-full">
            {/* Country Field */}
            <FormFieldSkeleton />
            
            {/* Name Fields Grid */}
            <div className="grid grid-cols-2 gap-4">
              <FormFieldSkeleton />
              <FormFieldSkeleton />
            </div>
            
            {/* Address Field */}
            <FormFieldSkeleton />
            
            {/* City & Governorate Grid */}
            <div className="grid grid-cols-2 gap-4">
              <FormFieldSkeleton />
              <FormFieldSkeleton />
            </div>
            
            {/* Phone Field with Icon */}
            <div className="animate-pulse">
              <div className="h-10 bg-gray-200 rounded w-full relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
            
            {/* Save Info Checkbox */}
            <div className="flex items-center gap-2 animate-pulse">
              <div className="h-4 w-4 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </section>

        {/* Footer Links Skeleton */}
        <div className="text-center animate-pulse">
          <div className="flex justify-center gap-4">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-18"></div>
          </div>
        </div>
      </div>

      {/* Left Side Skeleton - Cart Items */}
      <div className="w-full md:w-1/2 md:sticky md:top-0 md:self-start">
        
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2 mb-4 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-20"></div>
          <div className="h-4 bg-gray-200 rounded w-4"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-4"></div>
          <div className="h-4 bg-gray-200 rounded w-12"></div>
        </div>

        {/* Products List Skeleton */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            <ProductItemSkeleton />
            <ProductItemSkeleton />

            {/* Action Buttons Skeleton */}
            <div className="flex gap-4 mt-6">
              <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse"></div>
              <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Shipping Info Skeleton */}
            <div className="bg-gray-50 p-4 rounded-lg mt-4 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              <div className="h-4 bg-gray-200 rounded w-3/5 mt-2"></div>
            </div>

            {/* Discount Info Skeleton */}
            <div className="text-center animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Order Summary Skeleton */}
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <div className="space-y-4 animate-pulse">
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            </div>
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="text-center">
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerLoader;