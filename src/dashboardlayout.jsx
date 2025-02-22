import React, { useEffect, useRef, useState } from "react";
import {  Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import PropTypes from "prop-types";

export const DashboardLayout = ({ children }) => {
    const { t } = useTranslation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPropertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Function to change language
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
            <div className="flex h-screen flex-col md:flex-row">
                {/* Sidebar */}
                <aside className={`bg-[#06163A] text-white p-5 transition-transform duration-300 
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 fixed md:relative h-full`}
                >
                    <h3 className="text-3xl font-semibold text-white text-center pb-4">SBR</h3>
                    <ul>
                        <Link to={'/dashboard'}>
                            <li className="p-3 hover:bg-[#7A7A7A] rounded-md flex items-center cursor-pointer">
                                <i className="fa fa-dashboard mr-3" /> {t('sidebar.dashboard')}
                            </li>
                        </Link>

                        <li className="p-3 hover:bg-[#7A7A7A] rounded-md flex items-center cursor-pointer">
                            <i className="fa fa-users mr-3" /> {t('sidebar.users')}
                        </li>

                        <li className="p-3 hover:bg-[#7A7A7A] rounded-md flex items-center cursor-pointer" 
                            onClick={() => setPropertiesDropdownOpen(!isPropertiesDropdownOpen)}
                        >
                            <i className="fa fa-building mr-3" /> {t('sidebar.properties')}
                            <i className={`fa ${isPropertiesDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'} ml-auto`} />
                        </li>

                        {isPropertiesDropdownOpen && (
                            <ul className="pl-3 py-2 bg-[#06163A] rounded-md gap-3">
                                <Link to={'/property/manage/VFFormI'}>
                                    <li className="py-3 hover:bg-[#7A7A7A] cursor-pointer">
                                        <i className="fa fa-plus mr-2"></i> {t('sidebar.village_form_I')}
                                    </li>
                                </Link>
                                <Link to={'/property/manage/VFFormII'}>
                                    <li className="py-3 hover:bg-[#7A7A7A] cursor-pointer">
                                        <i className="fa fa-plus mr-2"></i> {t('sidebar.village_form_II')}
                                    </li>
                                </Link>
                                <Link to={'/property/manage/VFFormVIIA'}>
                                    <li className="py-3 hover:bg-[#7A7A7A] cursor-pointer">
                                        <i className="fa fa-plus mr-2"></i> {t('sidebar.village_form_VIIA')}
                                    </li>
                                </Link>
                                <Link to={'/property/manage/VFFormVIIB'}>
                                    <li className="py-3 hover:bg-[#7A7A7A] cursor-pointer">
                                        <i className="fa fa-plus mr-2"></i> {t('sidebar.village_form_VIIB')}
                                    </li>
                                </Link>
                            </ul>
                        )}

                        <li className="p-3 hover:bg-[#7A7A7A] rounded-md flex items-center text-red-400 cursor-pointer">
                            <i className="fa fa-sign-out mr-3" /> {t('sidebar.logout')}
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <div className={`flex-1 flex flex-col overflow-hidden w-full ${isSidebarOpen ? "w-4/5" : "w-full"}`}>
                    <header className="bg-white shadow-md p-4 flex items-center justify-between relative">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-[#7A7A7A] text-xl md:hidden">
                            <i className="fa fa-bars" />
                        </button>

                        <h2 className="text-xl font-koboto font-semibold">{t('topbar.dashboard')}</h2>

                        {/* Language Switcher Buttons */}
                        <div className="flex gap-2 cursor-pointer">
                            <button onClick={() => changeLanguage('en')} className="px-3 py-1 border rounded bg-gray-200">English</button>
                            <button onClick={() => changeLanguage('sd')} className="px-3 py-1 border rounded bg-gray-200">Sindhi</button>
                            <button onClick={() => changeLanguage('ur')} className="px-3 py-1 border rounded bg-gray-200">Urdu</button>
                        </div>
                    </header>

                    {/* Main Panel */}
                    <main className="flex-1 p-6 bg-[#F1F1F1] overflow-y-scroll">
                        {children}
                    </main>
                </div>
            </div>
    );
};

DashboardLayout.propTypes = {
    children: PropTypes.any.isRequired,
};
